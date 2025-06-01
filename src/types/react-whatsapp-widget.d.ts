declare module 'react-whatsapp-widget' {
  export interface WhatsAppWidgetProps {
    phoneNumber: string;
    message?: string;
    companyName?: string;
    replyTimeText?: string;
    inputPlaceHolder?: string;
  }

  export const WhatsAppWidget: React.FC<WhatsAppWidgetProps>;
} 