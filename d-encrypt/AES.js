const crypto = require('crypto');
const key = crypto.randomBytes(32); // Khóa bí mật có độ dài 256 bit (32 bytes)
const iv = crypto.randomBytes(16); // Vector khởi tạo có độ dài 128 bit (16 bytes)

// Hàm mã hóa chuỗi
function encrypt(message, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encryptedData = cipher.update(message, 'utf8', 'base64');
  encryptedData += cipher.final('base64');
  return encryptedData;
}

//==========================================================================//

function decrypt(ciphertext, key, iv) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));
    let decryptedData = decipher.update(ciphertext, 'base64', 'utf8');
    decryptedData += decipher.final('utf8');
    return decryptedData;
  }