import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getTimeDifference(startTime:string, endTime:string) {
  // Helper function to convert time to 24-hour format
  function parseTime(timeStr:any) {
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }
    
    return hours + minutes / 60;
  }

  const start = parseTime(startTime);
  const end = parseTime(endTime);
  
  const difference = end - start;
  
  return difference < 0 ? difference + 24 : difference; // Handle overnight cases
}

// Example usage
// console.log(getTimeDifference("09:00 AM", "05:00 PM")); // Output: 8
export function convertTo12HourFormat(hours:number, minutes:any = 0) {
  // Determine AM or PM
  const period = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Pad minutes with leading zero if needed
  minutes = String(minutes).padStart(2, '0');

  return `${hours}:${minutes} ${period}`;
}

// Example usage
// console.log(convertTo12HourFormat(17)); 