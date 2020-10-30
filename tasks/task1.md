# Task1 - List Component

Create a list of time log entries.
The root component (App) provides a list of log entries and hands them over to the List component.

The structure of a Log entry is the following:

```
type Log {
  id: number;
  from: string;
  until: string;
  title: string;
  duration: number;
}
```
