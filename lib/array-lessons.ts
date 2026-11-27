export type ArrayLesson = "minmax" | "second" | "reverse";
export type ArrayStep = { values:number[]; active:number[]; message:string; output:string };
export function parseArrayInput(text:string):number[] {
  if(!text.trim())return [];
  const parts=text.split(",");
  if(parts.length>16||parts.some(part=>!/^\s*-?\d+\s*$/.test(part)))throw new Error("Use at most 16 comma-separated integers, or leave empty to test an empty array.");
  const values=parts.map(Number);if(values.some(value=>!Number.isSafeInteger(value)||Math.abs(value)>1000000))throw new Error("Use integers between -1,000,000 and 1,000,000.");return values;
}
export function traceArray(lesson:ArrayLesson,input:number[]):ArrayStep[] {
  const values=[...input];const steps:ArrayStep[]=[];
  const add=(active:number[],message:string,output:string)=>steps.push({values:[...values],active,message,output});
  if(lesson==="reverse"){
    add([],"Begin with opposite-end pointers. The original input is copied for this demonstration.",JSON.stringify(values));
    for(let left=0,right=values.length-1;left<right;left++,right--){[values[left],values[right]]=[values[right],values[left]];add([left,right],`Swap indices ${left} and ${right}; move both pointers inward.`,JSON.stringify(values));}
    add([],`Finished after ${Math.floor(values.length/2)} swaps. Empty and one-element arrays need no swaps.`,JSON.stringify(values));
  }else if(lesson==="minmax"){
    if(!values.length){add([],"No minimum or maximum exists for an empty input. The source implementations raise an error.","Error: Array must not be empty");return steps;}
    let minimum=values[0],maximum=values[0];add([0],"Initialize from the first value, not zero.",`Minimum = ${minimum}; maximum = ${maximum}`);
    for(let i=1;i<values.length;i++){minimum=Math.min(minimum,values[i]);maximum=Math.max(maximum,values[i]);add([i],`Inspect ${values[i]}. The trackers now describe indices 0 through ${i}.`,`Minimum = ${minimum}; maximum = ${maximum}`);}
  }else{
    let largest:number|null=null,second:number|null=null;add([],"No values have been seen. A missing runner-up is distinct from zero.","Largest = missing; second = missing");
    for(let i=0;i<values.length;i++){const value=values[i];let action="Skip: this value does not change the two distinct leaders.";if(largest===null||value>largest){second=largest;largest=value;action="Save the old maximum as runner-up, then replace the maximum.";}else if(value<largest&&(second===null||value>second)){second=value;action="Promote this distinct value to runner-up.";}add([i],action,`Largest = ${largest}; second = ${second??"missing"}`);}
  }
  return steps;
}
