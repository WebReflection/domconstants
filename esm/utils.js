export default ({ source }) => {
  const lower = source.replace(/[^a-z|]+/g, '');
  const upper = lower.toUpperCase();
  return new Set([...lower.split('|'), ...upper.split('|')]);
};
