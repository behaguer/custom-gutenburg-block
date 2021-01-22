<?php
/**
 * Plugin Name: Custom Blocks — Assure Digital Custom Blocks
 * Plugin URI: https://assuredigital.com.au
 * Description: Custom Block Components for Assure Digital
 * Author: Ryan Behague
 * Author URI: https://assuredigital.com.au/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path(__FILE__) . 'src/init.php';
