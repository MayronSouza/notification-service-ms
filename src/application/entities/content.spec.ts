import { Content } from './content';

describe('src :: Application :: Entities :: Notification :: Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amaizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a notification content with more than 244 characters', () => {
    expect(() => new Content('a'.repeat(245))).toThrow();
  });
});
