<?php
/**
 * Configuration overrides for WP_ENV === 'development'
 */

use Roots\WPConfig\Config;
use function Env\env;

// Enable plugin and theme updates and installation from the admin
Config::define('DISALLOW_FILE_MODS', false);
