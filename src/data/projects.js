export const projects = [
  {
    title: "Custom Shopify Theme with Advanced Sections",
    description:
      "Built a complete custom Shopify theme featuring reusable sections and advanced cart logic using Liquid, schema-based sections, and JavaScript.",
    features: [
      "Custom Hero section using schema settings",
      "Font Picker section for dynamic typography",
      "Live Free Shipping Bar using Shopify AJAX cart",
      "Custom Featured Collection section",
      "Advanced Product Page with variants, stock status, and metafields",
    ],
    tech: [
      "Shopify Liquid",
      "Sections & Schema",
      "JavaScript",
      "AJAX Cart",
      "Metafields",
    ],
    live: "https://dev-store22081998.myshopify.com/",
    code: "https://github.com/Roshandube/shopify-custom-theme",
    demoVideo: "r8oUEMDbuUc",
  },
  {
    id: "ambulance-management-system",
    title: "Ambulance Management System (AMS)",
    description:
      "A centralized web platform built using Java (JSP/Servlets) and MySQL to manage ambulance booking, driver allocation, and fleet tracking with role-based authentication.",
    features: [
      "Role-based access (Admin, Driver, Patient)",
      "Emergency booking with source and destination selection",
      "Ambulance status tracking (Available / Assigned)",
      "Driver profile and license verification",
      "Feedback and complaint system",
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL", "Tomcat", "Maven"],
    images: [
      { label: "Dashboard", src: "/images/dashboard.png" },
      { label: "Driver Registration", src: "/images/driver-registration.png" },
      { label: "Driver Dashboard", src: "/images/driver-homepage.png" },
      {
        label: "Patient Registration",
        src: "/images/patient-registration.png",
      },
      { label: "Patient Dashboard", src: "/images/patient-homepage.png" },
      { label: "Admin Login", src: "/images/admin-login.png" },

      { label: "Admin Dashboard", src: "/images/admin-dashboard.png" },
    ],
    live: "Available on request (Runs on Apache Tomcat)",
    code: "https://github.com/Roshandube/Ambulance-Management-System",
  },
];
