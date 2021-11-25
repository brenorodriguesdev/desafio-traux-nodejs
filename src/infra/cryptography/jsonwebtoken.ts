import { Encrypter } from '../../data/contracts/cryptography/encrypter';
import jwt from 'jsonwebtoken';

export class JsonWebToken implements Encrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret)
  }
}