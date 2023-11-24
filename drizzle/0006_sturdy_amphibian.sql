ALTER TABLE "projectsToCategories" DROP CONSTRAINT "projectsToCategories_project_id_projects_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projectsToCategories" ADD CONSTRAINT "projectsToCategories_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
