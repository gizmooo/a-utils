export const lerp = (a: number, b: number, n: number) => {
  return (b - a) * n + a;
}

export const lerpLimit = (current: number, target: number, speed = 0.1, limit = 0.001) => {
  let change = (target - current) * speed;
  if (Math.abs(change) < limit) {
    change = target - current;
  }
  return change;
}

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

export function base64ToArrayBuffer(base64: string) {
  base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
  let binaryString = atob(base64);
  let len = binaryString.length;
  let bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}