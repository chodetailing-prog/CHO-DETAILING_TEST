export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string; // Main thumbnail
  images: string[]; // Gallery images
  date: string;
  description?: string;
}

const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Porsche 911 GT3",
    category: "Paint Correction & Ceramic Coating",
    image: "https://images.unsplash.com/photo-1503376713259-8bbaf0118c58?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503376713259-8bbaf0118c58?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "2023-10-24",
    description: "최고급 페인트 보정 공정과 세라믹 코팅 시공으로 차량 본연의 광택을 되찾아드렸습니다."
  },
  {
    id: "2",
    title: "Mercedes-Benz G-Class",
    category: "Premium Interior Detailing",
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1974&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "2023-10-20",
    description: "가죽 케어부터 실내 구석구석까지 디테일한 클리닝을 통해 신차급 컨디션을 완성했습니다."
  },
  {
    id: "3",
    title: "BMW M4 Competition",
    category: "Full PPF Installation",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070&auto=format&fit=crop"
    ],
    date: "2023-10-15",
    description: "전체 PPF 시공으로 스톤칩과 스크래치로부터 완벽한 보호막을 형성했습니다."
  },
];

export function getPortfolioItems(): PortfolioItem[] {
  const stored = localStorage.getItem("portfolioItems");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  return defaultPortfolioItems;
}

export function savePortfolioItems(items: PortfolioItem[]) {
  localStorage.setItem("portfolioItems", JSON.stringify(items));
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};
