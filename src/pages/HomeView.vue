<template>
  <div class="home">
    <div class="welcome">
      <h2>👩‍🍳 Mau masak menu simpel tapi enak?</h2>
      <p>Jelajahi berbagai resep lezat yang bisa kamu recook di rumah dengan mudah dan cepat!</p>
    </div>

    <div class="tips">
      <h3>✨ Tips Memasak:</h3>
      <ul>
        <li>🧂 Gunakan bumbu segar untuk rasa terbaik.</li>
        <li>🍳 Masak dengan hati dan semangat!</li>
        <li>📷 Jangan lupa foto hasil masakanmu!</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.home {
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
  margin: auto;
}

.welcome h2 {
  font-size: 1.8rem;
  color: #d16ba5;
  margin-bottom: 10px;
}

.welcome p {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.actions {
  margin-top: 30px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s ease;
  box-shadow: 0 4px 10px rgba(245, 87, 108, 0.3);
}

.btn:hover {
  background: #f5576c;
  transform: translateY(-2px);
}

.btn-outline {
  background: white;
  color: #d16ba5;
  border: 2px solid #fbc4de;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s ease;
}

.btn-outline:hover {
  background: #fdeff6;
}

.tips {
  margin-top: 50px;
  text-align: left;
  background: #fff0f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}

.tips h3 {
  color: #d16ba5;
  margin-bottom: 12px;
}

.tips ul {
  padding-left: 20px;
}

.tips li {
  margin-bottom: 10px;
  color: #444;
  font-size: 0.95rem;
}
</style>
