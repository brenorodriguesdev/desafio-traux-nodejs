import { Encrypter } from '../../data/contracts/cryptography/encrypter';
import { Decrypter } from '../../data/contracts/cryptography/decrypter';

import jwt from 'jsonwebtoken';

export class JsonWebToken implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret)
  }

  async decrypt (ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}