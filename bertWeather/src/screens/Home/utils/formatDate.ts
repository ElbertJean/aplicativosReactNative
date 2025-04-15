export function formatDateTimeBR() {
  const now = new Date();

  const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    timeZone: 'America/Sao_Paulo',
  }).format(now);

  const formattedTime = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  }).format(now);

  const parts = formattedDate.replace('.', '').split(' ');

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const diaSemana = capitalize(parts[0]);
  const dia = parts[1];
  const de = parts[2];
  const mes = capitalize(parts[3]);

  const final = `${diaSemana} ${dia} ${de} ${mes}, ${formattedTime}`;
  return final;
}

export function formatDate(dateString: string) {
  const parts = dateString.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const date = new Date(year, month, day);
  const formattedDay = String(date.getDate()).padStart(2, '0');
  const formattedMonth = String(date.getMonth() + 1).padStart(2, '0');
  const formattedYear = String(date.getFullYear()).slice(-2);
  return `${formattedDay}.${formattedMonth}.${formattedYear}`;
}
