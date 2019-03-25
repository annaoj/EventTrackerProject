-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema expense_tracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `expense_tracker` ;

-- -----------------------------------------------------
-- Schema expense_tracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `expense_tracker` DEFAULT CHARACTER SET utf8 ;
USE `expense_tracker` ;

-- -----------------------------------------------------
-- Table `category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `category` ;

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `expense`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `expense` ;

CREATE TABLE IF NOT EXISTS `expense` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(155) NOT NULL,
  `description` TEXT NULL,
  `cost` DECIMAL(9,2) NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_expense_category_idx` (`category_id` ASC),
  CONSTRAINT `fk_expense_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `category` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS admin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'admin'@'localhost' IDENTIFIED BY '12345';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `category`
-- -----------------------------------------------------
START TRANSACTION;
USE `expense_tracker`;
INSERT INTO `category` (`id`, `name`) VALUES (1, 'Groceries');
INSERT INTO `category` (`id`, `name`) VALUES (2, 'Entertainment');
INSERT INTO `category` (`id`, `name`) VALUES (3, 'Bills');
INSERT INTO `category` (`id`, `name`) VALUES (4, 'Health');
INSERT INTO `category` (`id`, `name`) VALUES (5, 'Household');
INSERT INTO `category` (`id`, `name`) VALUES (6, 'Shopping');
INSERT INTO `category` (`id`, `name`) VALUES (7, 'Vehicle');
INSERT INTO `category` (`id`, `name`) VALUES (8, 'Debt');
INSERT INTO `category` (`id`, `name`) VALUES (9, 'Others');

COMMIT;


-- -----------------------------------------------------
-- Data for table `expense`
-- -----------------------------------------------------
START TRANSACTION;
USE `expense_tracker`;
INSERT INTO `expense` (`id`, `name`, `description`, `cost`, `date`, `category_id`) VALUES (1, 'Target', 'groceries for 1 week', 150.00, '2019-03-03', 1);
INSERT INTO `expense` (`id`, `name`, `description`, `cost`, `date`, `category_id`) VALUES (2, 'T-Mobile', 'phone bill', 60.00, '2019-03-06', 3);

COMMIT;

