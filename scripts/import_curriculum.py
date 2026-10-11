from pathlib import Path
import re, json, sys
source_path = Path(sys.argv[1] if len(sys.argv)>1 else 'content/research.md')
output_path = Path(sys.argv[2] if len(sys.argv)>2 else 'content/curriculum.json')
source = source_path.read_text()
# Source register
resources=[]
for line in source.splitlines():
    m=re.match(r'\| (R\d+) \| \[([^]]+)\]\((https://[^)]+)\) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|', line)
    if m:
        rid,title,url,scope,mods,role=[x.strip() for x in m.groups()]
        resources.append(dict(id=rid,title=title,url=url,hostname=re.sub(r'^https?://','',url).split('/')[0],scope=scope,modules=[int(x) for x in re.findall(r'\d+',mods)],role=role,kind='documentation',status='DOC_OFFICIAL' if role in ('primary','reference') else 'SUPPLEMENT'))
# Video metadata
videos=[]
video_section=source.split('## 4. Video course register',1)[1].split('## 5.',1)[0]
for line in video_section.splitlines():
    if not line.startswith('| V'): continue
    cells=[c.strip() for c in line.strip('|').split('|')]
    m=re.match(r'(V\d+) \| \[(.*)\]\((https://www\.youtube\.com/watch\?v=([^&)]+))\) — (.*?) \(([^)]+)\) \| (.*?) \| \*\*(.*?)\*\*',line.strip('| '))
    if not m:
        # Titles may themselves contain square brackets; use the URL as the stable boundary.
        m=re.match(r'(V\d+) \| \[(.*?)\]\((https://www\.youtube\.com/watch\?v=([^&)]+))\) — (.*?) \(([^)]+)\) \| (.*?) \| \*\*(.*?)\*\*',line.strip('| '))
    if m:
        vid,title,url,yid,author,date,used,status=m.groups()
        videos.append(dict(id=vid,title=title,url=url,youtubeId=yid,author=author.strip(),publicationDate=date,used=used.strip(),status=status.strip(),notes=cells[-1].strip(),kind='video',chapters=[]))
byid={v['id']:v for v in videos}
# Chapter start tables (V07 intentionally has no timestamp table)
chapter_section=source.split('## 5. Publisher-listed video chapter timestamps',1)[1].split('## 6.',1)[0]
current=None
for line in chapter_section.splitlines():
    h=re.match(r'### (V\d+)',line)
    if h: current=byid.get(h.group(1)); continue
    m=re.match(r'\| ([^|]+) \| `?(\d\d):(\d\d):(\d\d)`? \| \[Watch chapter\]\(https://www\.youtube\.com/watch\?v=([^&]+)&t=(\d+)s\) \|',line)
    if m and current:
        title,hh,mm,ss,yid,seconds=m.groups()
        current['chapters'].append(dict(title=title.strip(),time=f'{hh}:{mm}:{ss}',startSeconds=int(seconds),provenance='publisher_listed',url=f'https://www.youtube.com/watch?v={yid}&t={seconds}s'))
# Modules
modules=[]
part=source.split('## 6. The complete 24-module learning map',1)[1].split('## 7.',1)[0]
blocks=re.split(r'(?=### M\d+\.)',part)
for block in blocks:
    h=re.search(r'### M(\d+)\. ([^—\n]+)— weeks ([^\n]+)',block)
    if not h: continue
    n=int(h.group(1)); title=h.group(2).strip(); weektext=h.group(3).strip()
    def field(label):
        q=re.search(r'\*\*'+re.escape(label)+r':\*\* (.+)',block)
        return q.group(1).strip() if q else ''
    modules.append(dict(id=n,slug=re.sub(r'[^a-z0-9]+','-',title.lower()).strip('-'),title=title,weeks=weektext,coverage=field('Core coverage'),resourceIds=re.findall(r'R\d+',field('Read first')),videoIds=re.findall(r'V\d+',field('Targeted videos')),build=field('Build'),passWhen=field('Pass when')))
# Weekly plans and daily rows
weeks=[]
part=source.split('## 7. Week-by-week daily syllabus',1)[1].split('## 8.',1)[0]
blocks=re.split(r'(?=### Week \d+ —)',part)
days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
for block in blocks:
    h=re.search(r'### Week (\d+) — (.+?) \((M\d+)\)',block)
    if not h: continue
    n=int(h.group(1)); title=h.group(2).strip(); mid=int(h.group(3)[1:])
    focus=re.search(r'\*\*Focus:\*\* (.*?)\. \*\*Resources:\*\* ([^.]+)\. \*\*Video:\*\* ([^.]+)\.',block)
    daily=[]
    for dm in re.finditer(r'^- \*\*(Mon|Tue|Wed|Thu|Fri|Sat) · (\d+)h:\*\* (.+)$',block,re.M):
        di={'Mon':0,'Tue':1,'Wed':2,'Thu':3,'Fri':4,'Sat':5}[dm.group(1)]
        daily.append(dict(day=days[di],durationMinutes=int(dm.group(2))*60,outline=dm.group(3).strip(),status='outline'))
    artefact=re.search(r'\*\*Weekly artefact:\*\* (.+)',block)
    checkpoint=re.search(r'\*\*Checkpoint:\*\* (.+)',block)
    weeks.append(dict(number=n,title=title,moduleId=mid,focus=focus.group(1) if focus else '',resourceIds=re.findall(r'R\d+',focus.group(2)) if focus else [],videoIds=re.findall(r'V\d+',focus.group(3)) if focus else [],days=daily,artefact=artefact.group(1).strip() if artefact else '',checkpoint=checkpoint.group(1).strip() if checkpoint else '',estimatedMinutes=900,phase=(n-1)//6+1))
# Projects
projects=[]
part=source.split('## 8. Project ladder and acceptance criteria',1)[1].split('## 9.',1)[0]
for line in part.splitlines():
    m=re.match(r'\| (P\d+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|',line)
    if m:
        pid,title,week,criteria=[x.strip() for x in m.groups()]
        projects.append(dict(id=pid,title=title,weeks=week,criteria=criteria))
phases=[dict(id=i,title=t,range=f'{(i-1)*6+1:02d}–{i*6:02d}',weeksStart=(i-1)*6+1,weeksEnd=i*6) for i,t in enumerate(['Python foundations','APIs and FastAPI','Data and persistence','Security and quality','Scale and architecture','Production engineering'],1)]
data=dict(title='Backend Mastery Academy',hours=540,plannedWeeks=36,phaseCount=6,moduleCount=len(modules),studyDays=sum(len(w['days']) for w in weeks),resources=resources,videos=videos,modules=modules,weeks=weeks,phases=phases,projects=projects)
output_path.parent.mkdir(parents=True, exist_ok=True)
output_path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:len(data[k]) for k in ['resources','videos','modules','weeks','projects']}|{'studyDays':data['studyDays'],'chapterCount':sum(len(v['chapters']) for v in videos)},indent=2))
if len(resources)<55 or len(videos)!=10 or len(modules)!=24 or len(weeks)!=36 or data['studyDays']!=216 or len(projects)!=9: raise SystemExit('Curriculum validation failed')
if sum(w['estimatedMinutes'] for w in weeks)!=32400: raise SystemExit('Expected 900 minutes per week')
if not byid['V10']['status'].startswith('LEGACY_SUPPLEMENT'): raise SystemExit('V10 should remain legacy')
