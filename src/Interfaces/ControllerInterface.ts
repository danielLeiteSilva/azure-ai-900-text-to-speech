export default interface ControllerInterface {
  execute(req: any, res: any): Promise<void>;
}