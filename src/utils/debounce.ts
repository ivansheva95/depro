// export const debouce = (fn: () => void, delay: number) => {
//   let timeout: NodeJS.Timeout | undefined;
//   return function() {
//     const fnCall = () => fn.apply(null, arguments)
//     clearTimeout(timeout)
//     timeout = setTimeout(fnCall, delay)
//   }
// }

// export const debounce = (fn: () => void, delay: number): () => void => {
//   let timeout: NodeJS.Timeout | undefined;
//   return function(this: any, ...args: any[]) {
//     const fnCall = () => fn.apply(this, args);
//     clearTimeout(timeout);
//     timeout = setTimeout(fnCall, delay);
//   };
// };