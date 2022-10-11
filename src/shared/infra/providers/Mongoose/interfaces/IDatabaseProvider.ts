export default interface IDatabaseProvider {
  init(uri: string): Promise<void>;
}
