import { defineService } from 'utils/reservices'

defineService('common', {
  actions: require('./common/actions'),
  reducers: require('./common/reducers'),
});

defineService('competitions', {
  actions: require('./competitions/actions'),
  reducers: require('./competitions/reducers'),
  middleware: require('./competitions/middleware').default,
});

defineService('athletes', {
  actions: require('./athletes/actions'),
  reducers: require('./athletes/reducers'),
});

defineService('news', {
  actions: require('./news/actions'),
  reducers: require('./news/reducers'),
});

defineService('committees', {
  actions: require('./committees/actions'),
  reducers: require('./committees/reducers'),
});

defineService('federations', {
  actions: require('./federations/actions'),
  reducers: require('./federations/reducers'),
});

defineService('pages', {
  actions: require('./pages/actions'),
  reducers: require('./pages/reducers'),
});

defineService('results', {
  actions: require('./results/actions'),
  reducers: require('./results/reducers'),
});

defineService('dashboard', {
  actions: require('./dashboard/actions'),
  reducers: require('./dashboard/reducers'),
})

defineService('quota', {
  actions: require('./og_quota_places/action'),
  reducers: require('./og_quota_places/reducers'),
})