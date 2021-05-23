# Day Planner

## Description

This application allows the user to plan their day by entering hourly tasks. The user will enter their tasks into the system and be able to access their planner after closing and reloading the app. The app will also inform the user if the timeframe for the task has passed or is coming up.

[Deployed using Github Pages](https://lbalbrecht.github.io/lba-day-planner/)

## Usage

When the app launches, the user will be presented with a blank planner. When the user clicks on the input field in each hour block, they will be able to enter a task to complete in that hour. Pressing the save button to the right of the hour block will save THAT HOUR'S task to local storage. Any tasks saved to local storage will reappear when the page is reloaded.

![Planner Landing Page](./assets/images/screenshot.png?raw=true "a webpage with a white background. The page is titled 'Work Day Scheduler' and has several rows labeled hourly from 9-5, each with a blue save button. There is a red button at the bottom of the page that reads 'Clear tasks'")

If the user wishes to remove a single task, they must delete the task from the input field and then save the empty field to local storage. To permanently delete all tasks, the user may click the "Clear tasks" button at the bottom of the page. Doing so will clear all information from the browser's local storage. The user must confirm that they want to clear their tasks to do so.

## Contributors

* Leighton Albrecht

[GitHub Repository](https://github.com/lbalbrecht/lba-day-planner)