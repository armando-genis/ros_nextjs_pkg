from launch import LaunchDescription
from launch.actions import ExecuteProcess
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='ros_nextjs_dashboard').find('ros_nextjs_dashboard')
    app_path = os.path.join(pkg_share, 'dashboard_app')
    
    return LaunchDescription([
        ExecuteProcess(
            cmd=['npm', 'run', 'dev'],
            cwd=['/home/genis/ros2_ws/src/ros_nextjs_pkg/dashboard_app'],
            output='screen'
        )
    ])
