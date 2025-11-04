    const fruits = ['🍎', '🍋', '🍐', '🍒', '🍑'];
    let attempt = 1;
    const maxAttempts = 3;
    const userName = prompt("Enter name:");
    document.getElementById('user').textContent = `Player: ${userName}`;

    function generate() {
      if (attempt > maxAttempts) return;

      const grid = document.getElementById('slotGrid');
      grid.innerHTML = '';
      const columns = [[], [], []];

      for (let col = 0; col < 3; col++) {
        let used = new Set();
        while (columns[col].length < 3) {
          let fruit = fruits[Math.floor(Math.random() * fruits.length)];
          if (!used.has(fruit)) {
            used.add(fruit);
            columns[col].push(fruit);
          }
        }
      }

      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.textContent = columns[col][row];
          grid.appendChild(cell);
        }
      }

      let win = false;
      for (let row = 0; row < 3; row++) {
        const a = columns[0][row];
        const b = columns[1][row];
        const c = columns[2][row];
        if (a === b && b === c) {
          win = true;
          break;
        }
      }

      const result = document.getElementById('result');
      if (win) {
        result.textContent = `${userName} win!`;
      } else if (attempt === maxAttempts) {
        result.textContent = `${userName} lost`;
      } else {
        result.textContent = '';
      }

      const btn = document.querySelector('button');
      attempt++;
      if (attempt <= maxAttempts) {
        btn.textContent = `Attempt ${attempt}/${maxAttempts}`;
      } else {
        btn.disabled = true;
      }
    }