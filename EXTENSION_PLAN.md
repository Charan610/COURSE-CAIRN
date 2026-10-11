# Adding future learning tracks

1. Add a separate curriculum JSON using the existing weeks/modules/resources/videos/projects shape. Preserve existing course IDs and files.
2. Add one available course descriptor to `content/catalog.json`. Build and static server discover catalog curriculum files automatically.
3. Keep any new activity fields course-specific in `lib/state.mjs`. Reuse the current authenticated users and `(user_id, course_id)` state store.
4. Add tests for source counts, links, state validation, user/course isolation and existing course regression checks.
5. Use server-side environment variables and authorization for future AI endpoints. Do not expose provider keys in public assets or send private learning data without a clear feature purpose.

DSA is the first sibling track, stored as course `dsa`, content track `dsa-cpp-main-v1`. Its practice metadata is under `state.dsa`; Backend state shape is unchanged. Deployments need managed PostgreSQL and APP_ORIGIN configured as documented in README.
