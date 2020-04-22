--had to add conditional since it already existed.
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'article_category') THEN
        CREATE TYPE article_category AS ENUM (
        'Listicle',
        'How-to',
        'News',
        'Interview',
        'Story'
        );
    END IF;

ALTER TABLE blogful_articles
    ADD COLUMN
        style article_category;
END$$;