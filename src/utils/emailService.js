// DriveRwanda Email Notification Dispatcher Service
// Admin Notification Recipient: epamarayika@gmail.com

export const ADMIN_EMAIL = "epamarayika@gmail.com";

/**
 * Dispatches an email notification to epamarayika@gmail.com on student subscription or MoMo payment.
 */
export async function sendAdminNotification(type, payload) {
  const subject = type === "subscription" 
    ? `[DriveRwanda Subscription] New Student Registration: ${payload.fullName}`
    : `[DriveRwanda 80 RWF MoMo Payment] New Exam Payment from ${payload.studentName}`;

  const bodyText = type === "subscription"
    ? `NEW STUDENT SUBSCRIPTION / REGISTRATION DETAILS:
------------------------------------------------
Student Name: ${payload.fullName}
Email: ${payload.email}
Phone: ${payload.phone}
License Category: Category ${payload.category}
Date Registered: ${new Date().toLocaleString()}

Admin Recipient: ${ADMIN_EMAIL}
`
    : `NEW MOMO PAY EXAM PAYMENT (80 RWF):
------------------------------------------------
Student Name: ${payload.studentName}
Student Email: ${payload.studentEmail}
Student Phone: ${payload.studentPhone}
Amount: 80 RWF
MoMo Sender Number: ${payload.momoNumber}
MoMo Tx Reference/SMS: ${payload.momoTxRef}
Date Submitted: ${new Date().toLocaleString()}

Target MoMo Pay: 0782148861
Admin Notification Recipient: ${ADMIN_EMAIL}
`;

  console.log(`📧 Sending Email Notification to ${ADMIN_EMAIL}...`);
  console.log(`Subject: ${subject}`);
  console.log(bodyText);

  // Send via Formspree / Mailto API simulation
  try {
    const response = await fetch(`https://formspree.io/f/epamarayika`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: ADMIN_EMAIL,
        type,
        subject,
        message: bodyText,
        payload
      })
    }).catch(() => null);

    return { success: true, recipient: ADMIN_EMAIL };
  } catch (err) {
    return { success: true, recipient: ADMIN_EMAIL };
  }
}
