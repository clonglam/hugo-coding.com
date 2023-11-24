CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" varchar(1024),
	"year" varchar(4) NOT NULL,
	"client" varchar(255),
	"featured_image" varchar(255) NOT NULL,
	"demo_website" varchar(512),
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "projects_slug_unique" UNIQUE("slug")
);
