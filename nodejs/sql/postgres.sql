create table course (
	id smallserial primary key,
	name varchar(100)
);

create table course_module (
	id smallserial primary key,
	name varchar(100),
	credits smallint,
	course_id smallint references course(id)
);

create table student (
	id serial primary key,
	name varchar(255),
	email varchar(255),
	birth_date date,
	address varchar(255)
);

create table student_courses (
	student_id integer references student(id),
	course_id smallint references course(id),
	CONSTRAINT student_courses_pk PRIMARY KEY(student_id, course_id)
);

create table student_modules (
	student_id integer references student(id),
	module_id smallint references course_module(id),
	CONSTRAINT student_modules_pk PRIMARY KEY(student_id, module_id)
);

create table marks (
    id bigserial primary key,
	student_id integer references student(id),
	module_id smallint references course_module(id),
	study_year smallint,
	is_repeat bool,
	mark smallint
);

insert into course values(1, 'IT');
insert into course values(2, 'MEDICINE');
insert into course values(3, 'BUSINESS_STUDIES');
insert into course values(4, 'HOSPITALITY');

insert into course_module values(1, 'IT_MODULE_1', 4, 1);
insert into course_module values(2, 'IT_MODULE_2', 4, 1);
insert into course_module values(3, 'IT_MODULE_3', 3, 1);
insert into course_module values(4, 'IT_MODULE_4', 2, 1);

insert into course_module values(5, 'MEDICINE_MODULE_1', 4, 2);
insert into course_module values(6, 'MEDICINE_MODULE_2', 4, 2);
insert into course_module values(7, 'MEDICINE_MODULE_3', 3, 2);
insert into course_module values(8, 'MEDICINE_MODULE_4', 2, 2);

insert into course_module values(9, 'BUSINESS_STUDIES_MODULE_1', 4, 3);
insert into course_module values(10, 'BUSINESS_STUDIES_MODULE_2', 4, 3);
insert into course_module values(11, 'BUSINESS_STUDIES_MODULE_3', 4, 3);
insert into course_module values(12, 'BUSINESS_STUDIES_MODULE_4', 2, 3);

insert into course_module values(13, 'HOSPITALITY_MODULE_1', 4, 4);
insert into course_module values(14, 'HOSPITALITY_MODULE_2', 4, 4);
insert into course_module values(15, 'HOSPITALITY_MODULE_3', 3, 4);
insert into course_module values(16, 'HOSPITALITY_MODULE_4', 2, 4);

