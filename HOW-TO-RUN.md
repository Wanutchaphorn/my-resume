# วิธีรันเว็บที่ง่ายขึ้น

## วิธีที่ 1: ใช้ VS Code Tasks (แนะนำ)
1. กด `Ctrl + Shift + B` ในและ VS Code
2. เลือก "npm dev (Run Web)"
3. เว็บจะรันที่ http://localhost:3000

## วิธีที่ 2: ใช้ Batch File (Windows)
1. Double-click ที่ไฟล์ `run-dev.bat`
2. เว็บจะรันที่ http://localhost:3000

## วิธีที่ 3: ตั้งค่า PATH ถาวร (One-time setup)
1. เปิด PowerShell (ธรรมดา)
2. รันคำสั่ง:
   ```
   powershell -ExecutionPolicy Bypass -File setup-and-run.ps1
   ```
3. หลังจากนี้ คุณสามารถใช้ `npm run dev` ได้เลยโดยไม่ต้องระบุ PATH

## วิธีที่ 4: ตั้ง PATH ใน VS Code Settings (ถ้าต้องการ)
- VS Code จะใช้ .vscode/tasks.json โดยอัตโนมัติ
- ไม่ต้องทำอะไรเพิ่มเติม ก็รันได้เลย

---

**เลือกวิธีไหนก็ได้ โดยวิธีที่ 1 (VS Code Tasks) เป็นวิธีที่ง่ายที่สุด**
