# QR Code Attendance System

A completly offline digital system to track in-person attendance. 

## Finally, a real solution
This project addresses a common problem in college classrooms: taking attendance without the risk of _attendance fruad_. 

The **only** way to solve this problem is to use a **physical submission process**, which this tool achieves through QR Codes. (More on why other methods don't work below)

## High Level
Students use their phone/tablet/computer to generate a unique QR Code. The instructor positions their computer at the exit. Now students can simply scan their phones as they leave the classroom.

Additionally, instructors can optionally ask the students to answer an exit quiz question.

## Usage + Screenshots

### Students
The student navigates to [attn.kihtrak.com](https://attn.kihtrak.com) where they enter their student ID.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/bd56ab77-49a2-49b3-8e03-f4202b0c252a" />

If the instructor has asked an exit question they can also answer it here.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/5ad5d906-5c2c-42bb-b112-27b0037cc3b9" />

The student simply hits generate and instantly recieves a QR Code.

<img width="300" alt="image" src="https://github.com/user-attachments/assets/9ac5afc5-6880-4372-861e-49738b9aa996" />

They scan their QR code on the instructor's computer as they exit the classroom.

### Instructors
The instructor navigates to [attn.kihtrak.com/instructor](https://attn.kihtrak.com/instructor) on their phone/computer.

Students can scan their QR codes on your machine. The screen will do a quick flash and beep to indicate a successful scan.

<img width="2658" height="1889" alt="image" src="https://github.com/user-attachments/assets/9e201010-cdc1-4099-912e-84742aa414e1" />

At the bottom of the page you will be able to the results in a table. With the option to export the raw data.

<img width="2640" height="613" alt="image" src="https://github.com/user-attachments/assets/7570a1a9-330c-4987-8b17-ad2c0fb74cb1" />

#### UMD CS Instructors
As a TA for the University of Maryland Computer Science department, I wrote some a script to make attendance entry into the portal instantanious.
If you would like to use or modify the script yourself, you can find it here: [attn.kihtrak.com/instructor/copy-paste](https://attn.kihtrak.com/instructor/copy-paste/)

## Security
Because no data is ever sent over the internet, there are no FERPA compliance issues. The student's ID and their answer is saved locally to their device. The responses on the instructors version are also only stored locally on their device.

In fact, this entire system works entirely offline, if you simply download and save the website.

## Attendance Fruad
You could create a google form or use any number of online attendance trackers. The issue is, the online form can be filled out from _outside_ the classroom as well. 
Even a link that changes every day isn't enough, as 1 student can (and will) share the link to any students who were absent.

Manually taking attendance fights fruad but for large classrooms this becomes impractical and takes away valuable class time.

Requiring an exit quiz/ticket is a decent solution but it still requires the instuctor to waste time to manually update a system of record.
