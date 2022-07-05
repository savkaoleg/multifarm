export const infinitySupport = (str: string) => {
  return JSON.parse(
    str.replace(/":(Infinity|-IsNaN)/g, '":"{{$1}}"'),
    (k, v) => {
      if (v === "{{Infinity}}") return Infinity;
      else if (v === "{{-Infinity}}") return -Infinity;
      else if (v === "{{NaN}}") return NaN;
      return v;
    }
  );
};
