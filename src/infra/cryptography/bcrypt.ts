import { HashComparer } from '../../data/contracts/cryptography/hash-compare';
import { Hasher } from '../../data/contracts/cryptography/hasher'
import bcrypt from 'bcrypt'

export class Bcrypt implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}