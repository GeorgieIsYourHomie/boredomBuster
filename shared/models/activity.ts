// Interface Type for Activity Data
export interface Activity {
  activity: string; // description of activity
  type: string | undefined; // category of the activity
  participants: number; // number of participants required for the activity
  price: number; // cost of activity
  key: string; // unique numeric identifier for the activity
  accessibility: number; // how difficult the activity will be to, 0(easy), 1 (difficult)
}