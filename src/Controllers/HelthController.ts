import ControllerInterface from "../Interfaces/ControllerInterface";

export default new class HelhController implements ControllerInterface{
  async execute(req: any, res: any): Promise<void> {
    res.status(200).json({
      message: 'Connected'
    });
  }
}