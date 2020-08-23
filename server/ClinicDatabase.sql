CREATE DATABASE wmsu_clinic_database;

CREATE TABLE units (
    unit_id SERIAL NOT NULL,
    unit_description VARCHAR(225) NOT NULL,
    PRIMARY KEY (unit_id)
);

CREATE TABLE departments (
    department_id SERIAL NOT NULL,
    department_description VARCHAR(225) NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE courses (
    course_id SERIAL NOT NULL,
    course_description VARCHAR(225) NOT NULL,
    PRIMARY KEY (course_id),
    fk_department_id integer REFERENCES departments (department_id),
    UNIQUE(fk_department_id)
);

CREATE TABLE students (
    student_id VARCHAR(225),
    student_lastname VARCHAR(225) NOT NULL,
    student_firstname VARCHAR(225) NOT NULL,
    student_middlename VARCHAR(225) NOT NULL,
    student_extname VARCHAR(225),
    PRIMARY KEY (student_id),
    fk_course_id integer REFERENCES courses (course_id),
    UNIQUE(fk_course_id)
);

CREATE TABLE employees (
    employee_id VARCHAR(225),
    employee_lastname VARCHAR(225) NOT NULL,
    employee_firstname VARCHAR(225) NOT NULL,
    employee_middlename VARCHAR(225) NOT NULL,
    employee_extname VARCHAR(225),
    employee_position VARCHAR(255) NOT NULL,
    fk_unit_id integer REFERENCES units (unit_id),
	PRIMARY KEY (employee_id),
    UNIQUE(fk_unit_id)
);

CREATE TABLE patients (
    patient_id SERIAL NOT NULL,
    patient_weight VARCHAR(225),
    patient_height VARCHAR(225),
    patient_bp VARCHAR(225),
    patient_sugar_level VARCHAR(225),
    patient_body_temperature VARCHAR(255),
    patient_Date_taken DATE NOT NULL DEFAULT CURRENT_DATE,
	fk_student_id  VARCHAR(225) REFERENCES students (student_id),
	fk_employee_id VARCHAR(225) REFERENCES employees (employee_id),
    PRIMARY KEY (patient_id)
);

CREATE TABLE accounts (
    account_id UUID DEFAULT uuid_generate_v4(),
    account_lastname VARCHAR(225) NOT NULL,
    account_firstname VARCHAR(225) NOT NULL,
    account_middlename VARCHAR(225) NOT NULL,
    account_extname VARCHAR(225),
    account_username VARCHAR(225) NOT NULL,
    account_password VARCHAR(225) NOT NULL,
    account_type VARCHAR(225) NOT NULL,
    account_status VARCHAR(225) NOT NULL DEFAULT 1,
    account_date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (account_id),
	UNIQUE(account_username)
);

CREATE TABLE logs (
	log_id SERIAL NOT NULL,
	log_date DATE NOT NULL DEFAULT CURRENT_DATE,
	log_timein TIME NOT NULL DEFAULT CURRENT_TIME,
	log_timeout TIME,
	fk_account_id UUID REFERENCES accounts(account_id)
);

CREATE TABLE bundles (
    bundle_id SERIAL NOT NULL,
    bundle_arrived_date DATE,
    bundle_expiration_date DATE,
    bundle_total_quantity BIGINT NOT NULL,
    PRIMARY KEY (bundle_id)
);

CREATE TABLE medicines (
    medicine_id SERIAL NOT NULL,
    medicine_Generic_name VARCHAR(225) NOT NULL,
    medicine_Brand_name VARCHAR(225) NOT NULL,
    medicine_Dosage VARCHAR(225) NOT NULL,
    PRIMARY KEY (medicine_id)
);

CREATE TABLE stocks (
	 stock_id SERIAL NOT NULL,
	 stock_quantity BIGINT NOT NULL,
	 fk_medicine_id INTEGER REFERENCES medicines(medicine_id),
	 fk_bundle_id INTEGER REFERENCES bundles(bundle_id), 
	 UNIQUE(fk_medicine_id),
	 UNIQUE(fk_bundle_id) 
);

CREATE TABLE records (
    record_id SERIAL NOT NULL,
    record_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    record_description VARCHAR(225) NOT NULL,
    record_medicine_given BIGINT,
    PRIMARY KEY (record_id),
    fk_patient_id integer REFERENCES patients (patient_id),
    fk_medicine_id integer REFERENCES medicines(medicine_id),
    fk_account_id UUID REFERENCES accounts(account_id),
	UNIQUE(fk_patient_id),
    UNIQUE(fk_medicine_id),
    UNIQUE(fk_account_id)
);

