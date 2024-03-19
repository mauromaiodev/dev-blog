export function reformatDate(dateStr: string) {
  const parts = dateStr.split('-').map((part) => parseInt(part, 10));

  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return date.toLocaleDateString('en-US', options);
}

export function calculateReadingTime(mdxContent: any) {
  const wordsPerMinute = 200;

  const text = mdxContent.replace(/<\/?[^>]+(>|$)/g, '');
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length;

  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
