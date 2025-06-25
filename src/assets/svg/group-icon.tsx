export const GroupIcon = ({ color = "#555555" }: { color?: string }) => (
  <svg
    width="18"
    height="23"
    viewBox="0 0 18 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 14.0598H12M5 17.0598H8.5M16 1.05984H2C1.73478 1.05984 1.48043 1.1652 1.29289 1.35274C1.10536 1.54027 1 1.79463 1 2.05984V20.0598C1 20.3251 1.10536 20.5794 1.29289 20.767C1.48043 20.9545 1.73478 21.0598 2 21.0598H16C16.2652 21.0598 16.5196 20.9545 16.7071 20.767C16.8946 20.5794 17 20.3251 17 20.0598V2.05984C17 1.79463 16.8946 1.54027 16.7071 1.35274C16.5196 1.1652 16.2652 1.05984 16 1.05984Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5.05984H12V10.0598H5V5.05984Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
