# โปรเจค DevOps

## ภาพรวม
โปรเจคนี้ใช้แนวทางปฏิบัติที่ดีที่สุดของ DevOps ประกอบด้วย:
- การรวมโค้ดอย่างต่อเนื่อง (CI)
- การส่งมอบอย่างต่อเนื่อง (CD) 
- โครงสร้างพื้นฐานในรูปแบบโค้ด (IaC)
- การทดสอบอัตโนมัติ
- การเฝ้าระวังระบบ

## โครงสร้างโฟลเดอร์
- `/src` - โค้ดแอปพลิเคชัน
- `/tests` - ไฟล์ทดสอบ
- `/infrastructure` - ไฟล์โครงสร้างพื้นฐาน
- `/scripts` - สคริปท์อัตโนมัติ

## เริ่มต้นใช้งาน 
1. โคลนโปรเจคนี้
2. ติดตั้ง dependencies
3. รันสคริปท์ตั้งค่า

## การแก้ไขปัญหาที่พบบ่อย

### Docker ไม่สามารถเชื่อมต่อได้
1. ตรวจสอบว่าได้ติดตั้ง Docker Desktop
2. เปิด Docker Desktop และรอให้ Engine พร้อมทำงาน
3. ตรวจสอบสถานะด้วยคำสั่ง `docker ps`

### คำสั่ง Docker พื้นฐาน
```bash
# ตรวจสอบ Docker version
docker --version

# ดูสถานะ containers ที่กำลังทำงาน
docker ps

# ดู logs
docker logs <container_id>
```

## การแก้ไขปัญหาพอร์ตถูกใช้งาน

1. ตรวจสอบ container ที่รันอยู่:
```bash
docker ps
```

2. หยุด container ที่ใช้พอร์ต 3000:
```bash
docker stop <container_id>
```

3. หรือใช้พอร์ตอื่น:
```bash
docker run -p 3001:3000 devops-demo
```

## การเข้าถึงแอพพลิเคชัน

1. เปิดเบราว์เซอร์และเข้าถึง:
   - หน้าหลัก: http://localhost:3000
   - สถานะ API: http://localhost:3000/api/status

2. ตรวจสอบสถานะ container:
```bash
# ดู container ที่กำลังทำงาน
docker ps

# ดู logs
docker logs <container_id>
```

3. หากไม่สามารถเข้าถึงได้:
   - ตรวจสอบว่า container กำลังทำงาน
   - ลองรันใหม่ด้วยพอร์ตอื่น เช่น 3001
   - ตรวจสอบ firewall

## การใช้งาน CI/CD

1. Push โค้ดขึ้น GitHub:
```bash
git add .
git commit -m "เพิ่ม CI/CD pipeline"
git push origin main
```

2. ตรวจสอบ Pipeline:
- ไปที่ repository บน GitHub
- เลือกแท็บ "Actions"
- ดูผลการทำงานของ workflow

3. การแก้ไขปัญหา Pipeline:
- ตรวจสอบ logs ใน GitHub Actions
- แก้ไขโค้ดและ push ใหม่

## CI/CD Pipeline Status
[![CI/CD](https://github.com/TawatchaiTb/Devops/actions/workflows/main.yml/badge.svg)](https://github.com/TawatchaiTb/Devops/actions)

## การทำงานของ CI/CD
1. เมื่อ push โค้ดขึ้น GitHub:
   - ระบบจะรัน tests อัตโนมัติ
   - build Docker image
   - แจ้งผลการทำงานใน GitHub Actions

2. ดูผลการทำงานได้ที่:
   - GitHub repository > Actions tab
   - หรือคลิกที่ badge ด้านบน

## การเชื่อมต่อกับ GitHub

1. เริ่มต้น Git Repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. เชื่อมต่อกับ GitHub:
```bash
git remote add origin https://github.com/TawatchaiTb/Devops.git
git branch -M main
git push -u origin main
```

3. คำสั่ง Git ที่ใช้บ่อย:
```bash
git status                    # ดูสถานะไฟล์
git pull                      # ดึงโค้ดล่าสุด
git push                      # ส่งโค้ดขึ้น GitHub
```