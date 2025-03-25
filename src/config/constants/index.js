export const SITE_NAME = "Laundry Web";

const { NODE_ENV = "production" } = process.env
const { hostname } = window.location

const servers = {
  local: "http://localhost:3021",  
  customDev: "https://react.customdev.solutions:3021",
  live: "https://grocost.app:3025"
}




var URL;
if (NODE_ENV === "production" && hostname === "react.customdev.solutions") URL = servers.customDev
else if (NODE_ENV === "production" && hostname === "grocost.app") URL = servers.live
else URL = servers.local

export const BASE_URL = URL + "/api/";
export const UPLOADS_URL = URL;
export const UPLOADS_URL2 = URL + "/";
export const SOCKET_URL = URL;



export const AUTH = {
  signup: "user/auth/register",
  signin: "user/auth/signin",
  emailCode: "user/auth/emailVerificationCode",
  verifyCode: "user/auth/verifyRecoverCode",
  resetPassword: "user/auth/resetPassword",
  update:"user/auth/update"
};


export const REFERAL_CODE = {
  getAvaibleReferalCode: "user/auth/referal/get",
  getReferalDetail : "user/auth/referal/get/"
}

export const COUPEN = {
  redeemReferalCode : "user/auth/coupen/redeem/",
}

export const CATEGORY = {
    getall : "user/auth/category/get"
}

export const SUBCATEGORY = {
  getall : "user/auth/subcategory/get",
  subcatfilter  : "user/auth/subcategory/get/"
}

export const PRODUCTS = {
  getall : "user/auth/product/get/"
}

export const ORDER = {
  create : "user/auth/order/create",
  userOrder : "user/auth/order/userorder",
  orderDetails : "user/auth/order/"
}

export const QUERY = {
  create : "user/auth/query/create"
}

export const VERIFICATION = {
  getPackage:"verification-package/list-package",
  updatePackage:"verification-package/create-package-new",
  verifyAccount:"verification-package/verify-user"
}


export const PLANS = {
  getAllPlans: "subscription/logs",
  getPlanById:"subscription/planDetails/",
  updatePlan:"subscription/editPlan/",
  addPlan:"subscription/createPlan",
  deletePlan: "subscription/deletePlan/"
};


export const ADMIN = {
  getStats: "admin/dashboardData",
  getSubscriptionChart: "admin/getEarningChart",
  // getUsersChart: "admin/getUsersChart",
  getAllUsers: "user/getUsers",
  getUserById: "user/getUser/",
  toggleStatus: "user/toggleStatus/", 
  // deleteUser: "/admin/user/deleteUser/",
};

export const USER = {
  updateProfile: "user/updateAccount/",
  changePassword: "reset/changePassword",
};

export const USERS = {
  // get: "/users/admin",
  getAllUsers: "user/getUsers",
  getAllAdmins: "user/admin/getAdmins",
  getAdmin: "user/",
  updateAdmin: "user/updateAdmin/",
  // inactivateuser:"users/inactivateuser",
  getOne: "user/getUserById/",
  toggleStatus: "user/toggleStatus/",
  // deleteUser: "/admin/user/deleteUser/",
};

export const STATES = {
  addState: "/state/addState",
  getAllStates: "/state/getAllStates",
  getStateById: "/state/getStateById/",
  updateState: "/state/updateState/",
  deleteState: "/state/deleteState/",
};

export const POSITIONS = {
  addPosition: "/position/addPosition",
  getAllPositions: "/position/getAllPositions",
  getPositionById: "/position/getPositionById/",
  updatePosition: "/position/updatePosition/",
  deletePosition: "/position/deletePosition/",
};

export const REPORTS = {
  getAllReports: "admin/report",
  getReportById:"admin/post/",
  getPost:"admin/post/",
  deletePost:"post/deleteReport/"
};  

export const REPRESENTATIVE = {
  addRepresentative: "/representative/addRepresentative",
  getAllRepresentatives: "/representative/getAllRepresentatives",
  getRepresentativeById: "/representative/getRepresentativeById/",
  updateRepresentative: "/representative/updateRepresentative/",
  deleteRepresentative: "/representative/deleteRepresentative/",
};

export const DONATIONS = {
  getAllDonations: "/donation/getAllDonations",
};

export const FEEDBACKS = {
  getAllFeedbacks: "contact",
  getFeedbackById:"contact/"
};


export const ORDERS = {
  getAllOrders: "/order/getAllOrders",
  updateOrder: "/order/updateOrder/",
  getOrderById: "/order/getOrderById/",
  deleteOrder: "/order/deleteOrder/",
};

export const CATEGORIES = {
  addCategory: "/category/addCategory",
  getAllCategories: "/category/getAllCategories",
  getCategoryById: "/category/getCategoryById/",
  toggleStatus: "/category/toggleActiveInActive",
  updateCategory: "/category/updateCategory/",
  deleteCategory: "/category/deleteCategory/",
};

export const NEWS = {
  addNews: "/news/addNews",
  getAllNews: "/news/getAllNews",
  getNewsById: "/news/getNewsById/",
  updateNews: "/news/updateNews/",
  deleteNews: "/news/deleteNews/",
};



export const EMOTIONS = {
  getAllEmotions: "Emoji/logs",
  addEmoji :"Emoji/create",
  getEmotionsById:"Emoji/getEmotionsById/"
};

export const HISTORIES = {
  addHistory: "/history/addHistory",
  getAllHistorys: "/history/getAllHistorys",
  getHistoryById: "/history/getHistoryById/",
  updateNews: "/history/updateHistory/",
  deleteHistory: "/history/deleteHistory/",
};

export const EVENT = {
  addEvent: "/event/addEvent",
  updateEvent: "/event/updateEvent/",
  getAllEvents: "/event/getAllEvents",
  getEventById: "/event/getEventById/",
  deleteEvent: "/event/deleteEvent/",
  toggleStatus: "/event/toggleStatus",
};

export const PRODUCT = {
  addProduct: "/product/addProduct",
  getAllProducts: "/product/getAllProducts",
  getProductById: "/product/getProductById/",
  deleteProduct: "/product/deleteProduct/",
  updateProduct: "/product/updateProduct/",
};

export const PAYMENT = {
  getAllOrderPayments: "payment",
  getOne: "/payment/",
};

export const NOTIFICATION = {
  getAllNotifications: "notification/getAllAdminNotifications",
  getAllUnreadNotifications: "notification/getAllUnreadAdminNotifications",
  getNotificationById: "notification/getNotificationById/",
  toggleNotification: "notification/toggleNotification/",
  sendPushNotification: "notification/send-push-notifications",
  getNotifications: "notification/getNotifications"
};

export const CONTENT_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};
