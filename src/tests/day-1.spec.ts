import { readFileSync } from 'fs';
import path from 'path';
import { describe, expect, it } from 'vitest';
import { calculateSum } from '../day-1';

describe('Feature: Day1', () => {
  it('Example', () => {
    const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
    expect(calculateSum(input)).toBe(142);
  });

  //   it('should replace numbers in letters by numbers', () => {
  //     expect(stringWithNumbers('two1nine')).toBe('219');
  //     expect(stringWithNumbers('two1eight')).toBe('218');
  //     expect(stringWithNumbers('eightwothree')).toBe('823');
  //     expect(stringWithNumbers('abcone2threexyz')).toBe('abc123xyz');
  //     expect(stringWithNumbers('xtwone3four')).toBe('x2134');
  //     expect(stringWithNumbers('4nineeightseven2')).toBe('49872');
  //     expect(stringWithNumbers('zoneight234')).toBe('z18234');
  //     expect(stringWithNumbers('7pqrstsixteen')).toBe('7pqrst6teen');
  //   });

  it('Example 2', () => {
    const input = [
      'two1nine',
      'eightwothree',
      'abcone2threexyz',
      'xtwone3four',
      '4nineeightseven2',
      'zoneight234',
      '7pqrstsixteen'
    ];
    expect(calculateSum(input)).toBe(281);
  });

  it('Problem', () => {
    const input = readFileSync(path.resolve('src', 'input.txt'), 'utf-8').split('\n');
    expect(calculateSum(input)).toBe(56397);
  });
});
