"""Additive import. Never writes Backend curriculum or learner records."""
import re,json,pathlib,shutil
from urllib.parse import urlparse
root=pathlib.Path(__file__).resolve().parent.parent
source=pathlib.Path('/Users/charan/Downloads/DSA_MASTERY_RESEARCH_ROADMAP_CODEX.md')
if not source.exists(): source=root/'content/dsa-research.md'
s=source.read_text(); shutil.copyfile(source,root/'content/dsa-research.md') if source!=root/'content/dsa-research.md' else None
clean=lambda x:re.sub(r'\*\*|`','',x).strip()
resources=[];videos=[]
for line in s.splitlines():
 m=re.match(r'\| `([LDI]-[^`]+)` \| \[([^]]+)\]\((https?://[^)]+)\) \| (.*?) \|',line)
 if m:
  id,title,url,scope=m.groups();resources.append(dict(id=id,title=title,url=url,hostname=urlparse(url).hostname,scope=clean(scope),role='interview' if id.startswith('I-') else 'reference',kind='documentation',status='Source register · availability review pending',modules=[]))
 m=re.match(r'\| `(V-[^`]+)` \| \[([^]]+)\]\((https?://[^)]+)\) \| (.*?) \| (.*?) \|',line)
 if m:
  id,title,url,used,notes=m.groups();videos.append(dict(id=id,title=title,url=url,youtubeId=(re.search(r'v=([^&]+)',url).group(1) if 'youtube.com' in url else ''),author='Bro Code' if id in ['V-CPP','V-JAVA','V-PY'] else 'Original publisher',publicationDate='',used=used,status='Source-document chapter verification; live recheck pending' if id in ['V-CPP','V-JAVA','V-PY','V-FISET'] else 'Timestamp not supplied',notes=notes,kind='video',chapters=[]))
current=None
for line in s.splitlines():
 m=re.match(r'#### (V-[A-Z]+):',line)
 if m:current=next(v for v in videos if v['id']==m[1])
 m=re.match(r'\| ([^|]+) \| (\d\d:\d\d:\d\d) \| \[Watch chapter\]\(([^)]+)\)',line)
 if m and current:
  title,time,url=m.groups();seconds=sum(int(n)*v for n,v in zip(time.split(':'),[3600,60,1]));assert int(re.search(r't=(\d+)s',url)[1])==seconds
  current['chapters'].append(dict(title=title.strip(),time=time,startSeconds=seconds,url=url,provenance='Publisher description transcribed in supplied research, 2026-10-11; not frame-reviewed',timestampStatus='description_chapter_verified',reviewStatus='live_recheck_pending'))
phases=[]
for m in re.finditer(r'### Phase (\d+): (.*?) — Weeks (\d+)–(\d+)',s):
 id,title,start,end=m.groups();phases.append(dict(id=int(id),title=title,range=f'{start}–{end}',weeksStart=int(start),weeksEnd=int(end)))
weeks=[];modules=[];projects=[]
for m in re.finditer(r'#### Week (\d+) — (.*?)\n(.*?)(?=\n#### Week |\n### Phase |\n---)',s,re.S):
 n,title,body=m.groups();n=int(n);ids=re.findall(r'`([LDIV]-[^`]+)`',body.split('**Duration:**')[0]);days=[]
 for d,h,task in re.findall(r'\| (Monday|Tuesday|Wednesday|Thursday|Friday|Saturday) \| (\d) h \| (.*?) \|',body):days.append(dict(day=d,durationMinutes=int(h)*60,outline=clean(task),status='guided_outline',id=f'dsa-w{n:02}-d{len(days)+1:02}'))
 checkpoint=clean(re.search(r'\*\*Checkpoint:\*\* (.*?) \*\*Evidence:',body)[1]);phase=(n-1)//6+1
 w=dict(number=n,id=f'dsa-w{n:02}',title=title,moduleId=n,phase=phase,focus=title,resourceIds=[id for id in ids if not id.startswith('V-')],videoIds=[id for id in ids if id.startswith('V-')],days=days,artefact=days[-1]['outline'],checkpoint=checkpoint,estimatedMinutes=900)
 weeks.append(w);modules.append(dict(id=n,slug=f'dsa-w{n:02}',title=title,weeks=str(n),coverage=title,resourceIds=w['resourceIds'],videoIds=w['videoIds'],build=w['artefact'],passWhen=checkpoint))
 if n%6==0:projects.append(dict(id=f'DSA-P{phase:02}',title=phases[phase-1]['title']+' independent gate',weeks=str(n),criteria=checkpoint))
problems=[]
section=s.split('## 8. Pattern-to-resource')[1].split('## 9.')[0]
for line in section.splitlines():
 if not line.startswith('|') or 'https://' not in line:continue
 cells=line.split('|');topic=cells[1].strip();nums=[int(n) for n in re.findall(r'\d+',cells[-2])];assigned=[]
 if '–' in cells[-2] and len(nums)==2:assigned=list(range(nums[0],nums[1]+1))
 else:assigned=nums
 for title,url in re.findall(r'\[([^]]+)\]\((https://[^)]+)\)',cells[3]):
  slug=urlparse(url).path.rstrip('/').split('/')[-1];id=urlparse(url).hostname+':'+slug
  p=next((x for x in problems if x['id']==id),None)
  if p:p['weeks']=sorted(set(p['weeks']+assigned));continue
  problems.append(dict(id=id,title=title,url=url,slug=slug,provider=urlparse(url).hostname,topic=topic,weeks=assigned,paidStatus='unknown',difficultySnapshot=None,kind='problem' if '/problems/' in url or '/tasks/dp_' in url else 'practice_directory'))
for r in resources:r['modules']=[w['moduleId'] for w in weeks if r['id'] in w['resourceIds']]
assert len(weeks)==48 and sum(len(w['days']) for w in weeks)==288 and len(phases)==8
result=dict(title='DSA Mastery',trackId='dsa-cpp-main-v1',primaryLanguage='cpp17',supportedLanguages=['cpp17','java','python3'],hours=720,plannedWeeks=48,phaseCount=8,moduleCount=48,studyDays=288,resources=resources,videos=videos,modules=modules,weeks=weeks,phases=phases,projects=projects,problems=problems)
(root/'content/dsa-curriculum.json').write_text(json.dumps(result,indent=2,ensure_ascii=False)+'\n')
catalog=json.loads((root/'content/catalog.json').read_text());catalog['courses']=[c for c in catalog['courses'] if c['id']!='dsa'];catalog['courses'].append(dict(id='dsa',number='02',title='DSA Mastery',category='Algorithms · C++ first',description='48 weeks of algorithms, independent practice and placement preparation. Java and Python bridges included.',curriculum='dsa-curriculum.json',status='available',weeks=48,modules=48,hours=720));catalog['plannedCourses']=[c for c in catalog.get('plannedCourses',[]) if c['id']!='dsa'];(root/'content/catalog.json').write_text(json.dumps(catalog,indent=2)+'\n')
print(f'Imported {len(weeks)} weeks, 288 days, {len(resources)} references, {len(videos)} videos, {len(problems)} practice destinations')
