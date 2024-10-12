export const Tabs = {
  DESCRIPTION: 1,
  ADDITIONAL_INFO: 2,
  REVIEWS: 3,
};

export type TabsType = (typeof Tabs)[keyof typeof Tabs];
