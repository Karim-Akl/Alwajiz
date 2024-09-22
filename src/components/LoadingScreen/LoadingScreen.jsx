import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // مدة التحميل 3 ثواني

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div style={styles.loadingContainer}>
      <img
        src="/image/logo.png" // استبدل هذا بمسار الصورة الترحيبية
        alt="Welcome"
        style={styles.image}
      />
      <h2 style={styles.message}>أهلاً وسهلاً بكم في موقعنا</h2>
    </div>
  );
}

const styles = {
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  image: {
    width: "200px",
    height: "200px",
  },
  message: {
    marginTop: "20px",
    fontSize: "24px",
    color: "#333",
  },
};
