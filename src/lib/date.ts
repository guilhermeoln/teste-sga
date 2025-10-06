export function formatDate(isoString: Date): string | null {
  try {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };

    return date.toLocaleString("pt-BR", options);
  } catch {
    return null;
  }
}
