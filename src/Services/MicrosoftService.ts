import sdk, { SpeechConfig } from "microsoft-cognitiveservices-speech-sdk";
import fs from "fs";

export class MicrosoftService{
  private speechConfig: SpeechConfig;
  constructor(){
    this.speechConfig = sdk
      .SpeechConfig
      .fromSubscription(process.env.SPEECH_KEY as string, process.env.SPEECH_REGION as string);
    this.speechConfig.speechRecognitionLanguage = "pt-BR";
  }

  async textToSpeech(): Promise<any> {
    let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync("YourAudioFile.wav"));
    let speechRecognizer = new sdk.SpeechRecognizer(this.speechConfig, audioConfig);
  }


  speechToText(): Promise<any> {
    return new Promise((resolve, reject) => {

    }); 
  }
}