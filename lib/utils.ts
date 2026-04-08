export function formatPhoneLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatSmsLink(phone: string) {
  return `sms:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatMailLink(email: string) {
  return `mailto:${email}`;
}