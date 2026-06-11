export function createMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}
