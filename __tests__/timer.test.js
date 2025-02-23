import Timer from '../src/domain/timer-entity.js';

describe('Timer', () => {
  it('should initialize with default time', () => {
    const timer = new Timer();
    expect(timer.getMinutes()).toBe('10');
    expect(timer.getSeconds()).toBe('00');
  });

  it('should initialize with custom time', () => {
    const timer = new Timer(1200);
    expect(timer.getMinutes()).toBe('20');
    expect(timer.getSeconds()).toBe('00');
  });
});
