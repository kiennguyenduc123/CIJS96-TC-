import './app.css'
import Card from'./component/Card';
import Modal from './components/Modal';

function App() {
  const students = [
    { id: 1, name: "Nguyễn Văn A", address: "123 Đường ABC, TP.HCM", identification: "ABC123" }
    // { id: 2, name: "Trần Thị B", address: "456 Đường XYZ, Hà Nội", identification: "XYZ456" },
    // { id: 3, name: "Lê Văn C", address: "789 Đường KLM, Đà Nẵng", identification: "KLM789" },
    // { id: 4, name: "Phạm Thị D", address: "321 Đường DEF, Cần Thơ", identification: "DEF321" },
    // { id: 5, name: "Hoàng Văn E", address: "654 Đường GHI, Hải Phòng", identification: "GHI654" },
    // { id: 6, name: "Đặng Thị F", address: "987 Đường JKL, Huế", identification: "JKL987" },
    // { id: 7, name: "Trần Văn G", address: "159 Đường MNO, Vũng Tàu", identification: "MNO159" },
    // { id: 8, name: "Nguyễn Thị H", address: "753 Đường PQR, Bình Dương", identification: "PQR753" },
    // { id: 9, name: "Lê Văn I", address: "258 Đường STU, Nha Trang", identification: "STU258" },
    // { id: 10, name: "Hoàng Thị K", address: "852 Đường VWX, Phú Yên", identification: "VWX852" }
];

  return (
    <>
      <div className='student_wrapper'>
        {
          students.map((studentss) => {
            return (
              <Card key = {studentss.id} id = {studentss.id} name = {studentss.name} address = {studentss.address} identification = {studentss.identification}/>
            )
          })
        }

        <Modal student = {students[0]} />

      </div>
    </>
  )
}

export default App;
