import { useState, useEffect } from "react";
import { Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const DashboardComponent = () => {
  const [data, setData] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const columns: ColumnsType<TodoItem> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Başlık",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Durum",
      dataIndex: "completed",
      key: "completed",
      render: (completed: boolean) => (completed ? "Tamamlandı" : "Beklemede"),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<TodoItem[]>(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(response.data);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // Eğer [] içine bir değişken verirsek, o değişken her güncellendiğinde useEffect çalışır
  // Eğer bir değişken vermezsek yani boş dizi verirsek, useEffect sadece ilk render'da çalışır

  // Yükleme durumunu ayrı kontrol etmek istersek if bloğu içinde bir komponent return edebiliriz
  // Dikkat etmemiz gereken konu komponent returnleri en altta olmalıdır.
  // Eğer return altında bir tanım fetch vs. yaparsak earlyReturn hatası alırız
  if (loading) {
    return <div>Yükleniyor yazısı...</div>;
  }

  // Yükleme durumu kontrolünün dışında, yükleme işlemi tamamlandığında görüntülenecek olan komponent
  // yukarıdaki if bloğu içinde return edilirse, yükleme işlemi tamamlandığında fetchData fonksiyonu setData aracılığıyla data'yı günceller ve komponent yeninden render olur
  // bu render sırasında setLoading(false) çalışır ve yukarıdaki if bloğu içindeki return çalışmaz
  // alternatif olarak ant design içinde loading attribute'u kullanılabilir ama her komponentte olmayabilir dokümantasyonda api kısmına bakılabilir
  // bir diğer alternatif Spin komponenti kullanılabilir sarmalanan komponentte loading döndürür
  return (
    <div style={{ padding: "20px" }}>
      <h2>Görevler Listesi</h2>
      <Spin spinning={loading}>
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          rowKey="id"
          pagination={{
            pageSize: 10,
            total: data.length,
            showSizeChanger: true,
          }}
        />
      </Spin>
    </div>
  );
};

export default DashboardComponent;
