CREATE TABLE `contacts` (
	`id` varchar(36) NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` varchar(15),
	`message` text NOT NULL,
	`privacy` boolean NOT NULL,
	CONSTRAINT `contacts_id` PRIMARY KEY(`id`)
);
