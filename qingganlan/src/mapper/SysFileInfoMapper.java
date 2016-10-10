package mapper;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import po.SysFileInfo;
import po.SysFileInfoExample;

public interface SysFileInfoMapper {
    int countByExample(SysFileInfoExample example);

    int deleteByExample(SysFileInfoExample example);

    int deleteByPrimaryKey(@Param("fileId") String fileId, @Param("usId") String usId);

    int insert(SysFileInfo record);

    int insertSelective(SysFileInfo record);

    List<SysFileInfo> selectByExample(SysFileInfoExample example);

    SysFileInfo selectByPrimaryKey(@Param("fileId") String fileId, @Param("usId") String usId);

    int updateByExampleSelective(@Param("record") SysFileInfo record, @Param("example") SysFileInfoExample example);

    int updateByExample(@Param("record") SysFileInfo record, @Param("example") SysFileInfoExample example);

    int updateByPrimaryKeySelective(SysFileInfo record);

    int updateByPrimaryKey(SysFileInfo record);
}